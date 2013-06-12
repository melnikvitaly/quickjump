#pragma once
#include "stdafx.h"
#include "monitor.h"

#ifdef CBMONITOR_EXPORTS
#define CBMONITOR_API __declspec(dllexport)
#else
#define CBMONITOR_API __declspec(dllimport)
#endif

class CBMONITOR_API  ClipBoardMonitor :
	public Monitor
{
private:

	HANDLE m_timer;
	bool m_lock;
	static VOID CALLBACK OnTimer(LPVOID, BOOLEAN);
public:
	ClipBoardMonitor(void);
	~ClipBoardMonitor(void);
	virtual void StartMonitor();
	virtual void StopMonitor();
};

