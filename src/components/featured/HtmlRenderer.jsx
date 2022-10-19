import StoryblokClient from'storyblok-js-client'

let Storyblok = new StoryblokClient({
  accessToken: '8nkQJy0cd7yTnAdoSku7vgtt'
})

function createMarkup(storyblokHTML) {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML),
  }
}

const RichTextField = ({ data }) => {
  return <div dangerouslySetInnerHTML={createMarkup(data)} />
}

export default RichTextField
