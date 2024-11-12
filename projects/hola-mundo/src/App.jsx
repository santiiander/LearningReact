import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App (){
    const formatUserName = (userName) => `@${userName}` 
    return (
    <section className="App">
        <TwitterFollowCard following userName = "Santii_ander">
            xd
        </TwitterFollowCard>
        <TwitterFollowCard following = {false} userName = "Santii_ander">
            xd2
        </TwitterFollowCard>


    </section>
    )
}