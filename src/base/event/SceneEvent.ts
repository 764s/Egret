class SceneEvent extends egret.Event
{
	public static readonly UNIT_ADD:string = "SceneEvent.UNIT_ADD";
	public static readonly UNIT_REMOVE:string = "SceneEvent.UNIT_REMOVE";

	public static readonly SCENE_CLEAR:string = "SceneEvent.SCENE_CLEAR";

	public constructor(type: string, bubbles?: boolean, cancelable?: boolean)
	{
		super(type, bubbles, cancelable)
	}

	public unitid:number;


}