class GiveawayController < ApplicationController

  def index
  end
  
  def create
    result, message = 0, 'success'
    student = Student.find_or_create_by(:phone => params[:phone])

    if student
      p student
      giveaway = student&.giveaways&.find_by(:course_id => Course::CURRENT_COURSE)
      if giveaway
        result, message = 1, 'no_chance'
      else
        send_nodes_count = (1..20).collect{|t| t*10}.sample
        p "node contracts.js #{student.wallet_address} #{send_nodes_count} #{Rails.env=='production' ? 'mainnet' : 'testnet'}"
        # sender_result = system "node contracts.js #{student.wallet_address} #{send_nodes_count} #{Rails.env=='production' ? 'mainnet' : 'testnet'}"
        sender_result = true
        p sender_result
        if sender_result
          Giveaway.create(student: student, course_id: Course::CURRENT_COURSE, nodes: send_nodes_count)
        else
          result, message = 1, 'send_node_failure'
        end
      end
    else
      result, message = 1, 'no_wallet_address'
    end
    render :json => { result: result, message: message, nodes: send_nodes_count}, status: 200
  end
end
