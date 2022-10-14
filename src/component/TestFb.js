import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook, ShareButton, Comments, Like, LoginButton } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function EmbeddedPostExample() {
  return (
    //<MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
    // <div
    //   className="fb-like" 
    //   data-href="https://www.24h.com.vn/tin-tuc-trong-ngay/chinh-thuc-bao-so-5-hinh-thanh-tren-bien-dong-mien-trung-mua-nhu-trut-nuoc-c46a1405400.html" 
    //   data-width="100" 
    //   data-layout="standard" 
    //   data-action="like" data-size="small" data-share="true">
    // </div>
          <div 
          class="fb-share-button" 
          data-href="https://developers.facebook.com/docs/plugins/" 
          data-layout="button_count"
          data-action="like" data-size="small">
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
          Chia sẻ</a>
          </div>
  );
}
