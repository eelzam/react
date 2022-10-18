import "./featured.scss";
import Stories from 'react-insta-stories';

import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

const sendVerificationEmail = async () =>
  async () => {
	  try {

		  storyblokInit({
			  accessToken: "8nkQJy0cd7yTnAdoSku7vgtt",
			  // bridge: false,
			  // apiOptions: {  },
			  use: [apiPlugin],

		  });

		  const storyblokApi = getStoryblokApi();
		  const {data} = await storyblokApi.get("cdn/stories");

		  console.log(data)

	  }
	  catch (error) {
      	console.log(error)
      throw new Error(error);
    }
  }





const stories2 = [

	{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>

                    <img className="mainimage" src="https://a.storyblok.com/f/178921/1024x683/e678fe295d/16068862230_13812ef6e8_b.jpeg" alt=""/>

                      <div className="mainpage">

    					  <h1> קונצרט</h1>

						  <h2>
						    הופעות בז׳נר שלי
							 </h2>
						  <h3>
  						  כל מה שקורה בזמן אמת
						  </h3>

                      </div></div>

		}
	},
		{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>

                    <img className="mainimage" src="https://a.storyblok.com/f/178921/400x500/92620f3de3/function-uuid4-at-0x7fa853756b00.jpg" alt=""/>

                      <div className="info">

                        <span className="desc">


                          מחכה לכם בהופעה מלאה🎤 עם כל השירים שאתם אוהבים
                        #טיפה_של_אושר
                        #בדקות_של_געגוע
                        חפלה אש🔥גם נוסטליה
                        אז אל תישארו בחוץ והזמינו מקומות כבר עכשיו!!

                        #להזמנות_דרך_הווצאפ
                        https://bit.ly/3PH01Wl
                        הכניסה חינם, פתיחת דלתות בשעה 22:00
                        🎼🎼🎼🎶🎵
                        תל אביב, מקווה ישראל 25
                        פינת מנחם בגין 16(גולדן לשעבר)
                        להזמנות בטלפון - ☎️053-5555222☎️

                        </span>

                      </div></div>

		}
	},

    {
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>

                    <img className="mainimage" src="https://a.storyblok.com/f/178921/400x500/dd3a1f6336/function-uuid4-at-0x7f9f44c82ef0.jpg" alt=""/>

                      <div className="info">

                        <span className="desc">

							  מחכה לכם בהופעה מלאה🎤 עם כל השירים שאתם אוהבים
							#טיפה_של_אושר
							#בדקות_של_געגוע
							חפלה אש🔥גם נוסטליה
							אז אל תישארו בחוץ והזמינו מקומות כבר עכשיו!!

							#להזמנות_דרך_הווצאפ
							https://bit.ly/3PH01Wl
							הכניסה חינם, פתיחת דלתות בשעה 22:00
							🎼🎼🎼🎶🎵
							תל אביב, מקווה ישראל 25
							פינת מנחם בגין 16(גולדן לשעבר)
							להזמנות בטלפון - ☎️053-5555222☎️

                        </span>

                      </div></div>
		}
	},
	{
		url: 'https://picsum.photos/1080/1920',
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	}

]

const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 10,
	color: 'white',
	height: '100%',
}

const storyContentStyle = {
	marginTop: '70px'
}



export default async function Featured() {



  return (
    <div className="featured">

      		<Stories
                loop
			    stories={stories2}
			    defaultInterval={10000}
				width={"100%"}
				height={"auto"}
				keyboardNavigation={true}
				storyContainerStyles={storyContentStyle}
		    />

    </div>
  );
}
