require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get information" do
    get :information
    assert_response :success
  end

  test "should get schedules" do
    get :schedules
    assert_response :success
  end

  test "should get vendors" do
    get :vendors
    assert_response :success
  end

  test "should get sponsors" do
    get :sponsors
    assert_response :success
  end

  test "should get stcyril" do
    get :stcyril
    assert_response :success
  end

end
