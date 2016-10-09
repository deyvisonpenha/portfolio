require 'test_helper'

class PortfolioControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get portfolio_index_url
    assert_response :success
  end

  test "should get about" do
    get portfolio_about_url
    assert_response :success
  end

  test "should get login" do
    get portfolio_login_url
    assert_response :success
  end

end
