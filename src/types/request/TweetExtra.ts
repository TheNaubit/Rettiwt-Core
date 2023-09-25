/**
 * @public
 */
export interface IReplyTo {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	in_reply_to_tweet_id: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
	exclude_reply_user_ids: Array<any>;
}

/**
 * @public
 */
export interface ITweetMedia {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	media_entities: Array<{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        media_id: string;
        // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
        tagged_users: Array<any>;
    }>
}
