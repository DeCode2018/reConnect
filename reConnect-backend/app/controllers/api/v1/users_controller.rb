class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  # POST /todos
    def create
      @user = User.create!(user_params)
      render json:(@user)
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

    def user_params
      # whitelist params
      params.permit(:name, :password, :avatar)
    end

    def set_user
      @user = User.find(params[:id])
    end
  end
