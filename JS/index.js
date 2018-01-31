 $(document).ready(function(){

      $("#circles").animate({opacity: '1'}, "slow");
	  $(".circleList > *:nth-of-type(1)").css( { transition: "transform 0.5s",  /*Apply css transition animation through Jquery*/
                              transform:  "translate(20em)" }, "slow" );

	  $(".circleList > *:nth-of-type(2)").css( { transition: "transform 0.5s",
                              transform:  "rotate(45deg) translate(20em) rotate(-45deg)" }, "slow" );

		$(".circleList > *:nth-of-type(3)").css( { transition: "transform 0.5s",
                              transform:  "rotate(90deg) translate(20em) rotate(-90deg)" }, "slow" );

      $(".circleList > *:nth-of-type(4)").css( { transition: "transform 0.5s",
                              transform:  "rotate(135deg) translate(20em) rotate(-135deg)" }, "slow" );

     $(".circleList > *:nth-of-type(5)").css( { transition: "transform 0.5s",
                              transform:  " rotate(180deg) translate(20em) rotate(-180deg)" }, "slow" );

      $(".circleList > *:nth-of-type(6)").css( { transition: "transform 0.5s",
                              transform:  "rotate(225deg) translate(20em) rotate(-225deg)" }, "slow" );

      $(".circleList > *:nth-of-type(7)").css( { transition: "transform 0.5s",
                              transform:  "rotate(270deg) translate(20em) rotate(-270deg)" }, "slow" );

     $(".circleList > *:nth-of-type(8)").css( { transition: "transform 0.5s",
                              transform:  "rotate(315deg) translate(20em) rotate(-315deg)" }, "slow" );


	  $(".circleList > *:nth-of-type(1)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(2)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(3)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(4)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(5)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(6)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(7)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });

    $(".circleList > *:nth-of-type(8)").click(function(){ /*Each click of main choice will display the next category*/

		   $("#mythAspects").css('display', 'block');     /*Display the second nav*/
		   $(".aspectBG").css('display', 'block');
		   $(".aspectBG").animate({opacity: 1}, "slow")

	  });


 });
