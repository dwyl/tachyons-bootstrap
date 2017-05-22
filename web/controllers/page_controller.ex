defmodule TachyonsBootstrap.PageController do
  use TachyonsBootstrap.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
