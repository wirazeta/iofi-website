import { Tweet } from "react-tweet";

interface TweetCardProps {
  id: string;
}

export default function TweetCard({ id }: TweetCardProps) {
  return (
    <div className="[&_.react-tweet-theme]:!m-0 [&_.react-tweet-theme]:!w-full">
      <Tweet id={id} />
    </div>
  );
}
