#pragma once

#include "stdafx.h"

#include "monitor.h"
class WndMonitror :
	public Monitor
{
public:
	WndMonitror(HWND hwnd);
	~WndMonitror(void);
	virtual void StartMonitor();
	virtual void StopMonitor();
};

