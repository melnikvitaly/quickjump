class Monitor
{
	private:

	protected:
		void StopMonitor();

	public:
		virtual void StartMonitor()=0;
		~Monitor();

};