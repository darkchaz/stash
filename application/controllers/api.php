<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Api extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('api/index');
	}


	public function friends()
	{


		// This is sample data for friends
		$data = array(
			array(
				'id' => 1,
				'name' => "Charles Johnson",
				'profile_pic' => './content/profile/chaz.jpg',
				'items' => array(
					array(
						'id' => 'a',
						'type' => 'phone number',
						'value' => '555-1234-1234',
					),
					array(
						'id' => 'b',
						'type' =>'email',
						'value' => 'me@charlesjohnson.org',
					)
				),
			),
			array(
				'id' => 2,
				'name' => "Seal Goldman",
				'profile_pic' => './content/profile/sefi.jpg',
				'items' => array(
					array(
						'id' => 'a',
						'type' => 'blog',
						'value' => 'http://seal.blogger.com',
					),
					array(
						'id' => 'b',
						'type' =>'fax',
						'value' => '555-999-9999',
					)
				),
			),
			array(
				'id' => 3,
				'name' => "Aaron Smith",
				'profile_pic' => './content/profile/aaron.jpg',
				'items' => array(
					array(
						'id' => 'a',
						'type' => 'phone number',
						'value' => '586-222-1234',
					),
					array(
						'id' => 'b',
						'type' =>'email',
						'value' => 'aaront@gmail.com',
					)
				),
			),
			array(
				'id' => 4,
				'name' => "James Jackson",
				'profile_pic' => './assets/img/default.jpg',
				'items' => array(
					array(
						'id' => 'a',
						'type' => 'phone number',
						'value' => '313-333-1234',
					),
					array(
						'id' => 'b',
						'type' =>'email',
						'value' => 'jj@gmail.com',
					)
				)
			)
		);
	
		$this->output->set_output( json_encode( array( 'response' => TRUE, 'success' => TRUE, 'data' => $data ) ) );
	}






}



