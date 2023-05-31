/**
 * User set query paramters that are used to specify the data that is requested.
 * 
 * @public
 */
export interface IArgs {
	/**
	 * The query string for filtering the data.
	 * 
	 * @remarks Works only while fetching tweets using the 'TWEETS' resource.
	 */
	query?: string;

	/**
	 * The 'rest_id' of the target resource.
	 */
	id?: string;

	/**
	 * The number of data items to fetch.
	 * 
	 * @remarks Works only for cursored lists and must meet the following criteria:
	 * 		- Must be >= 20 (when no cursor is supplied) and <= 100 for data related to tweets (expcept for 'TWEETS' resource, for which it must be <= 20).
	 * 		- Must be >= 40 (when no cursor is supplied) and <= 100 for data related to users.
	 */
	count?: number;

	/**
	 * The cursor string to the batch of data to fetch.
	 */
	cursor?: string;
}

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 * 
 * @public
 */
export interface IVariables {
	tweetId?: string;
	focalTweetId?: string;
	userId?: string;
	screen_name?: string;
	count?: number;
	cursor?: string;
	includePromotedContent: boolean;
	referrer: string;
	withBirdwatchNotes: boolean;
	withCommunity: boolean;
	withDownvotePerspective: boolean;
	withQuickPromoteEligibilityTweetFields: boolean;
	withReactionsMetadata: boolean;
	withReactionsPerspective: boolean;
	withSuperFollowsTweetFields: boolean;
	withSuperFollowsUserFields: boolean;
	withV2Timeline: boolean;
	withVoice: boolean;
	with_rux_injections: boolean;
	withClientEventToken: boolean;
}

/**
 * Parameters for customizing the raw response, that must be sent as a URL-encoded, stringified-JSON.
 * 
 * @public
 */
export interface IFeatures {
	graphql_is_translatable_rweb_tweet_is_translatable_enabled: boolean;
	interactive_text_enabled: boolean;
	longform_notetweets_consumption_enabled: boolean;
	responsive_web_edit_tweet_api_enabled: boolean;
	responsive_web_enhance_cards_enabled: boolean;
	responsive_web_graphql_timeline_navigation_enabled: boolean;
	responsive_web_text_conversations_enabled: boolean;
	responsive_web_twitter_blue_verified_badge_is_enabled: boolean;
	responsive_web_uc_gql_enabled: boolean;
	standardized_nudges_misinfo: boolean;
	tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: boolean;
	tweetypie_unmention_optimization_enabled: boolean;
	verified_phone_label_enabled: boolean;
	vibe_api_enabled: boolean;
	view_counts_everywhere_api_enabled: boolean;
	view_counts_public_visibility_enabled: boolean;
}

/**
 * User set URL query paramters that can be used to customize the format in which data is received.
 * 
 * @public
 */
export interface IQuery {
	cards_platform?: string;
	count?: number;
	cursor?: string;
	ext?: string;
	include_blocked_by?: number;
	include_blocking?: number;
	include_can_dm?: number;
	include_can_media_tag?: number;
	include_cards?: number;
	include_entities?: boolean;
	include_ext_alt_text?: boolean;
	include_ext_collab_control?: boolean;
	include_ext_edit_control?: boolean;
	include_ext_has_nft_avatar?: number;
	include_ext_is_blue_verified?: number;
	include_ext_limited_action_results?: boolean;
	include_ext_media_availability?: boolean;
	include_ext_media_color?: boolean;
	include_ext_sensitive_media_warning?: boolean;
	include_ext_trusted_friends_metadata?: boolean;
	include_ext_verified_type?: number;
	include_ext_views?: boolean;
	include_followed_by?: number;
	include_mute_edge?: number;
	include_profile_interstitial_type?: number;
	include_quote_count?: boolean;
	include_reply_count?: number;
	include_user_entities?: boolean;
	include_want_retweets?: number;
	pc?: number;
	q?: string;
	query_source?: string;
	send_error_codes?: boolean;
	simple_quoted_tweet?: boolean;
	skip_status?: number;
	spelling_corrections?: number;
	tweet_mode?: string;
	tweet_search_mode?: string;
}