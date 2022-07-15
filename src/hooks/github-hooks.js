import { useContext } from "react";
import { githubContext } from "../providers/github-provider";

const useGithub = () => {
    const { githubState } = useContext(githubContext);

    return { githubState };
};

export default useGithub;