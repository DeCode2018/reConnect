class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: [:show,:update,:destroy]

    def index
      events = Event.all
      render json: events, status: 200
    end
    # POST /events
    def create
      event = Event.create!(event_params)
      render json: event, status: 201
    end
    # PUT /users/:id
    def update
      @event.update(event_params)
      render json: @event, status: 200
    end
    # DELETE /users/:id
    def destroy
      eventId = @event.id
      @event.destroy
      render json: {message:"Zap! Event deleted", eventId:eventId}
    end
    # GET /users/:id
    def show
      render json: @event, status: 200
    end

    private
    # whitelist params
    def event_params
      params.require(:event).permit(:id, :user_id, :contact_id, :name, :description, :location, :event_date, :status)
    end

    def set_event
      @event = Event.find(params[:id])
    end

end
