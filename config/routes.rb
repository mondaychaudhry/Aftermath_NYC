Rails.application.routes.draw do
  resources :photos
  resources :journals
  resources :communities, only: [:index, :show, :update, :create, :destroy]
  resources :photos, only: [:index, :show, :update, :create, :destroy]
  resources :journals, only: [:index, :show, :update, :create, :destroy]
  resources :users, only: [:index, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end

