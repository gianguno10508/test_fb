import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook, ShareButton, Comments } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function EmbeddedPostExample() {
  return (
    //<MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
    <FacebookProvider appId="1505620756529166">
        <Comments href="https://www.facebook.com/permalink.php?story_fbid=pfbid02dCvSYZaFsi38kSJ5x3fybX8QjuhSNwSNc4vpdSNKeyNbPCZdRN6wTCpNYAmumGsHl&id=100026930804116" />
    </FacebookProvider>
  );
}
