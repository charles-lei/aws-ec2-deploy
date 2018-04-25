class CreateGiveaways < ActiveRecord::Migration[5.1]
  def change
    create_table :giveaways do |t|
      t.belongs_to :course
      t.belongs_to :student
      t.integer :nodes
      t.timestamps
    end
  end
end
