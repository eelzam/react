
import Stories from 'react-insta-stories';



const stories2 = [
	{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>
				<h1>The new version is here.</h1>
				<p>This is the new story.</p>
				<p>Now render React components right into your stories.</p>
				<p>Possibilities are endless, like here - here's a code block!</p>
				<pre>
					<code >
						console.log('Hello, world!')
        			</code>
				</pre>
				<p>Or here, an image!</p>
				<br />
				<img  src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
				<h3>Perfect. But there's more! →</h3>
			</div>
		}
	},
	{
		url: 'https://picsum.photos/1080/1920',
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	},
	{
		url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		type: 'video'
	}
]
const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 10,
	color: 'white',
	height: '100%',
}



export default function Featured() {
  return (
    <div className="featured">

      		<Stories
                loop
			    stories={stories2}
			    defaultInterval={150000}
				width={"100%"}
				height={"auto"}
				keyboardNavigation={true}

		    />


    </div>
  );
}
