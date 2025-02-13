/* eslint-disable */

import { IReplyTo, ITweetMedia } from "../TweetExtra";

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export interface IVariables {
	tweetId?: string;
	tweet_id?: string;
	userId?: string;
	listId?: string;
	screen_name?: string;
	count?: number;
	cursor?: string;
	rawQuery?: string;
	tweet_text?: string;
	product?: string;
	includePromotedContent: boolean;
	withVoice: boolean;
	withCommunity: boolean;

	media?: ITweetMedia;
  	reply?: IReplyTo;

	/** @returns The string representation of 'this' data. */
	toString(): string;
}
