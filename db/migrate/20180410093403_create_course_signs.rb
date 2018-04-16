class CreateCourseSigns < ActiveRecord::Migration[5.1]
  def change
    create_table :course_signs do |t|
      t.belongs_to :course
      t.belongs_to :student
      t.string :received_nodes
      t.timestamps
    end
  end
end
