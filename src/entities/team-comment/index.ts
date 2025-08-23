export type { TeamComment, TeamCommentState, TeamCommentFilters } from './model/types';
export { teamCommentSlice, setLoading, setTeamComments, addTeamComment, setError } from './model/slice';
export { TeamCommentCard } from './ui/TeamCommentCard/TeamCommentCard';