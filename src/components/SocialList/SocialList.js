import Icon from "../Icon";
import { List, Item } from "./SocialList.styled";

const SocialList = () => {
    return <List>
    <Item><a href="https://www.linkedin.com/"><Icon name="linkedin" width="13" height="13"/></a></Item>
    <Item><a href="https://twitter.com/home/"><Icon name="twitter" width="16" height="13"/></a></Item>
    <Item><a href="https://www.facebook.com/"><Icon name="facebook" width="9" height="16"/></a></Item>
    <Item><a href="https://www.pinterest.com/"><Icon name="pinterest" width="12" height="15"/></a></Item>
</List>
}

export default SocialList;