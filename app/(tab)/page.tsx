import AddTweet from "@/components/add-tweet";
import TweetList from "@/components/tweet-list";
import { getInitialTweets } from "@/service/tweetService";

export default async function MainPage() {
  console.log("===============main");
  const tweets = await getInitialTweets();
  return (
    <div className="p-5 flex flex-col gap-5">
      <AddTweet />
      <div className="border border-stone-400"></div>
      <TweetList initialTweets={tweets} />
    </div>
  );
}
