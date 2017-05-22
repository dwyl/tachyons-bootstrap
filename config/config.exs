# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tachyonsBootstrap,
  ecto_repos: [TachyonsBootstrap.Repo]

# Configures the endpoint
config :tachyonsBootstrap, TachyonsBootstrap.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "T+csuhn2CQ9JvD85czmoY+LbDeEt9DRtZX8pp4v7DYVbVo+6v9kvsNpR4RvNP3gV",
  render_errors: [view: TachyonsBootstrap.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TachyonsBootstrap.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
