namespace :nodes do
  desc 'send nodes to current course singin and giveaways'
  task sent: :environment do
    Student.all.each do |s|
      if s.has_valid_address?
        giveaway = s.current_course_giveaway
        signin = s.current_course_signin
        nodes_count = giveaway&.nodes.to_i + signin&.received_nodes.to_i
        next if nodes_count == 0
        p nodes_count
        p s.wallet_address
        p Rails.env
        result = system "node contracts.js #{s.wallet_address} #{nodes_count} #{Rails.env=='production' ? 'mainnet' : 'testnet'}"
        if result
          giveaway&.update(:is_sent => true)
          signin&.update(:is_sent => true)
        end
        p result ? 'success' : 'failure'
        sleep(5)
      end 
    end
  end
end
