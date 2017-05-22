defmodule TachyonsBootstrap.PageControllerTest do
  use TachyonsBootstrap.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Tachyons Bootstrap Library"
  end
end
