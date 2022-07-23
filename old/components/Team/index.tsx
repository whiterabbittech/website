import People from "./People";
import Image from "../image.js";
import TwitterIcon from "../Icons/twitter";
import LinkedInIcon from "../Icons/linkedin";

const copy = {
  aboutTheTeam: "Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.",
};

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <AboutTheTeam />
          <TeamMembers members={People} />
        </div>
      </div>
    </div>
  );
}

const AboutTheTeam = () => {
  return (
    <div className="space-y-5 sm:space-y-4">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Team</h2>
      <p className="text-xl text-gray-500">{copy.aboutTheTeam}</p>
    </div>
  );
};

interface TeamMembersProps {
  members: Array<TeamMemberProps>;
}

function TeamMembers(props: TeamMembersProps) {
  // Helper Function: Render each member as its own list element.
  const makeMember = (member: TeamMemberProps) => {
    return (
      <li key={member.name} className="sm:py-8" >
        <TeamMember {...member} />
      </li>
    );
  };
  // Wrap the Unordered list in styling.
  // Iterate through each member of the team and render them individually.
  return (
    <div className="lg:col-span-2">
      <ul
        role="list"
        className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
      >
        {props.members.map(makeMember)}
      </ul>
    </div>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  twitterUrl: string;
  linkedinUrl: string;
}

interface TwitterIconProps {
  twitterUrl: string;
}

const TeamMember = (props: TeamMemberProps) => {
  return (
    // Setup a three column grid.
    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
      {/* Establish Image Aspect ratio */}
      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
        <Image className="object-cover shadow-lg rounded-lg" src={props.imageUrl} alt="" layout="fill" />
      </div>
      {/* Render the Name, Role, and Bio. */}
      <div className="sm:col-span-2">
        <div className="space-y-4">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{props.name}</h3>
            <p className="text-indigo-600">{props.role}</p>
          </div>
         <div className="text-lg">
            <p className="text-gray-500">{props.bio}</p>
          </div>
          {/* Render Social Icons: Twitter, LinkedIn */}
          <ul role="list" className="flex space-x-5">
            <li>
              <a href={props.twitterUrl} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href={props.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
