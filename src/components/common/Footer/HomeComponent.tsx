import {Link} from "@material-ui/core";
import {ButtomWrapper, ButttomImg, Text} from "./FooterIndex";

export default function HomeComponent(): JSX.Element {

    return (
        <Link href='/main'>
            <ButtomWrapper>
                <ButttomImg src='/assets/main/home.svg'/>
                <Text>
                    홈
                </Text>
            </ButtomWrapper>
        </Link>
    )
};
