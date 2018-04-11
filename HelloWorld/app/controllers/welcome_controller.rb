class WelcomeController < ApplicationController
  def index
    # if params[:time].empty?
    #   render 
    # end
    # params[:time].to_date
  end
  def signin
    send_nodes_count = 90
    student = Student.find_by(:phone => params[:phone])
    if student
      p student
      course_sign = student&.course_signs&.find_by(:course_id => Course::CURRENT_COURSE)
      unless course_sign
        p "node contracts.js #{student.wallet_address} #{send_nodes_count}"
        result = system "node contracts.js #{student.wallet_address} #{send_nodes_count}"
        p result
        if result
          CourseSign.create(student: student, course_id: Course::CURRENT_COURSE, received_nodes: send_nodes_count)
        else
          render :json => { data: 'fail'}, status: 400
          return
        end
      end
      render :json => { data: 'success'}, status: 200
      return
    end
    render :json => { data: 'fail'}, status: 400
  end
end
