import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook, ShareButton, Comments, Like, LoginButton } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function EmbeddedPostExample() {
  return (
    //<MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=1505620756529166" width="450" height="35" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  );
}
