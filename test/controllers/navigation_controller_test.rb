require 'test_helper'

class NavigationControllerTest < ActionController::TestCase
  test "should get nav" do
    get :nav
    assert_response :success
  end

end
