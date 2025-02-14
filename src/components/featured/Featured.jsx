import "./featured.scss";
import Stories from 'react-insta-stories';
import axios from 'axios';
import React, {useState, useEffect} from "react";
import RichTextField from "./HtmlRenderer";


let stories2 = [

	{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>

                    <img className="mainimage" src="https://a.storyblok.com/f/178921/1024x1024/fb649a9c9e/dall-e-2022-10-22-09-44-38-a-male-singer-with-darboka-singing-in-concert-as-digital-art.png/m/" alt=""/>

                      <div className="mainpage">

    					  <h1> קונצרט</h1>

						  <h2>
						    הופעות בז׳אנר שלי
							 </h2>
						  <h3>
  						  כל מה שקורה בזמן אמת
						  </h3>

                      </div></div>
		},
		duration: 10000
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

export default function Featured() {

//	const [stories, setStories] = useState([]);
	const [loading, setLoading] = useState(true);

    // React advises to declare the async function directly inside useEffect
    async function getStories() {

    	setLoading(true);

    	const cv = await axios.get("https://api.storyblok.com/v1/cdn/spaces/me?token=8nkQJy0cd7yTnAdoSku7vgtt")

        console.log(cv)

    	const response = await axios.get(
			"https://api.storyblok.com/v1/cdn/stories?version=published&token=8nkQJy0cd7yTnAdoSku7vgtt&cv=" + cv.data.space.version);

			console.log(response)

      		response.data.stories.forEach((story) => {

				stories2.push( {
					content: ({ action, isPaused }) => {
						return <div style={contentStyle}>

								<img className="mainimage" src={story.content.image.filename + '/m/'} alt=""/>

							    <div className="info">

									<span className="desc">

										<RichTextField data={story.content.description} />
									{/*	{story.content.description}*/}
									</span>

								</div>
							   </div>
						}
				} )

			})

		setLoading(false);
		//setStories(stories2)
	  }


	  useEffect(() => {
				  getStories()
			}, [] )


	if (loading) {
        return <div>Loading...</div>;
    }

  return (
    <div className="featured">

      		<Stories
                loop
			    stories={stories2}
			    defaultInterval={20000}
				width={"100%"}
				height={"auto"}
				keyboardNavigation={true}
				storyContainerStyles={storyContentStyle}
		    />

    </div>
  );
}
