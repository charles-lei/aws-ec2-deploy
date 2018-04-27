class ChangeTableGiveaways < ActiveRecord::Migration[5.1]
  def change
    add_column :giveaways, :is_sent, :boolean, :default => false
    Giveaway.update_all(:is_sent => true)
  end
end
