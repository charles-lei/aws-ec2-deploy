class CreateCourseSignFailures < ActiveRecord::Migration[5.1]
  def change
    create_table :course_sign_failures do |t|
      t.belongs_to :course
      t.belongs_to :student
      t.text :message
      t.timestamps
    end
  end
end
