class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  # POST /users
  def create
    user = User.create(user_params)
    render json: user, status: 201
  end

  # GET /users/:id
  def show
    render json:(@user)
  end

  # PUT /users/:id
  def update
    @user.update(user_params)

  end

  # DELETE /users/:id
  def destroy
    @user.destroy

  end

  private
  # whitelist params
  def user_params    
    params.permit(:name, :password, :avatar)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
