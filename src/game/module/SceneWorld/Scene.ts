class Scene extends View
{
	public constructor()
	{
		super();
	}

	public updateBg(id:number):void
	{
		
	}

	private bg:egret.Bitmap;
	protected createChildren():void
	{
		this.bg = new egret.Bitmap(	RES.getRes("egret.border_png"));
		this.addChild(this.bg);


	}

	private roleDic: { [key: number]: BaseRole } = {};

	public addRole(role: BaseRole): void
	{
		this.roleDic[role.data.id] = role;

		this.addChild(role);
	}

	public removeRole(id: number): BaseRole
	{
		var role: BaseRole = this.roleDic[id];

		if (role && this.contains(role)) {
			this.removeChild(role);
		}

		delete this.roleDic[id];

		return role;
	}

	public clear(): void
	{
		for (let unitid in this.roleDic) {
			let role = this.roleDic[unitid];
			if (this.contains(role)) {
				this.removeChild(role);
			}
		}

		this.roleDic = {};
	}

	public print(): void
	{

		var unitCount: number = 0;
		var unitStr: string = "";

		for (let unitid in this.roleDic) {
			let role = this.roleDic[unitid];

			if (!role) {
				continue;
			}

			if (role) {
				if (unitStr.length > 0) {
					unitStr += ", ";
				}
				unitStr += unitid;
			}
		}

		console.log(`unit count:${unitCount}, units:${unitStr}`);
	}
}
