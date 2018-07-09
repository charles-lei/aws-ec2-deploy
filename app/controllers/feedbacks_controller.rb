class FeedbacksController < ApplicationController

  def show
    
  end

  def create
    student = Student.find_by(:phone => params[:phone])
    Feedback.create(:student => student, :stars => params[:hidStar], :content => params[:content])
    render :json => { result: 0, message: 'success'}, status: 200
  end

  def feedback_params
    params.permit(:phone, :hidStar, :content)
  end
end
