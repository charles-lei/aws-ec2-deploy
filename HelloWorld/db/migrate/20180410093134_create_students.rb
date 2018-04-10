class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :phone
      t.string :wallet_address
      t.timestamps
    end
  end
end
