class ViewElement
{
	public readonly viewId: VIEW_ID;
	public readonly viewClass: any;
	public readonly logicClass: any;
	public readonly viewType: VIEW_TYPE;

	public constructor(viewId: VIEW_ID, viewType: VIEW_TYPE, viewClass: any, logicClass:any)
	{
		this.viewId = viewId;
		this.viewClass = viewClass;
		this.logicClass = logicClass;
		this.viewType = viewType;
	}

	private _view: View;
	public get view(): View
	{
		if (!this._view) {
			this._view = new this.viewClass() as View;
		}
		return this._view;
	}

	private _logic: Logic;
	public get logic(): Logic
	{
		if (!this._logic) {
			this._logic = new this.logicClass() as Logic;
		}
		return this._logic;
	}
}
