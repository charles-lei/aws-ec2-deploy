class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :teather
      t.datetime :time
      t.timestamps
    end
  end
end
