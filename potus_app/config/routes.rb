Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tweets, only: [:create]
      resources :unverified_alerts, only: [:create]

    end
  end

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  
  root to: 'homepage#index'
  get '/*path' => redirect('/')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
