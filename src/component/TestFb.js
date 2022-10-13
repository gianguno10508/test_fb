import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function EmbeddedPostExample() {
  return (
    //<MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
    <FacebookProvider appId="1505620756529166">
        <ShareButton href="http://www.facebook.com" className="my-classname">
          Share
        </ShareButton>
    </FacebookProvider>
  );
}
