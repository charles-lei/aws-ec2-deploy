class ChangeTableCourseSigns < ActiveRecord::Migration[5.1]
  def change
    add_column :course_signs, :is_sent, :boolean, :default => false
    CourseSign.update_all(:is_sent => true)
  end
end
