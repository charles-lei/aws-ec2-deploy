class WelcomeController < ApplicationController
  def index
    if params[:timestamp].blank? || DateTime.strptime(params[:timestamp],'%s') + 40.seconds > DateTime.now
      redirect_to tip_path 
    end
  end

  def tip

  end

  def qcode
    @timestamp = Time.now.to_i
  end

  def signin
    result, message = 0, 'success'
    send_nodes_count = 350
    student = Student.find_by(:phone => params[:phone])

    if student && student.wallet_address.present?
      p student
      course_sign = student&.course_signs&.find_by(:course_id => Course::CURRENT_COURSE)
      if course_sign
        result, message = 1, 'already_signed'
      else
        p "node contracts.js #{student.wallet_address} #{send_nodes_count}"
        sender_result = system "node contracts.js #{student.wallet_address} #{send_nodes_count}"
        p sender_result
        if sender_result
          CourseSign.create(student: student, course_id: Course::CURRENT_COURSE, received_nodes: send_nodes_count)
        else
          result, message = 1, 'send_node_failure'
        end
      end
    else
      result, message = 1, 'no_wallet_address'
    end
    render :json => { result: result, message: message, wallet_address: student&.wallet_address}, status: 200
  end

end
