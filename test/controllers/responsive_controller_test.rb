require 'test_helper'

class ResponsiveControllerTest < ActionDispatch::IntegrationTest
  test "should get teste" do
    get responsive_teste_url
    assert_response :success
  end

end
