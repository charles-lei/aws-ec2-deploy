class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.belongs_to :student
      t.text :content
      t.integer :nodes
      t.integer :stars
      t.timestamps
    end
  end
end
