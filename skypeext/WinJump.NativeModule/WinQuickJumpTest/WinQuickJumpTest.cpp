// WinQuickJumpTest.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <stdio.h>
#include "../WinJump.NativeModule/ClipBoardMonitor.h"

int _tmain(int argc, _TCHAR* argv[])
{
	ClipBoardMonitor a;
	a.StartMonitor();
	getchar();
	a.StopMonitor();
	return 0;
}

