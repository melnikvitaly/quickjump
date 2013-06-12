#include "ClipBoardMonitor.h"


ClipBoardMonitor::ClipBoardMonitor(void)
	:m_lock(false)
{
}


ClipBoardMonitor::~ClipBoardMonitor(void)
{
}

void ClipBoardMonitor::StartMonitor()
{
 CreateTimerQueueTimer(&m_timer,NULL,OnTimer,this,0,1000,0);	
}
#define BUFFER 1024
VOID CALLBACK  ClipBoardMonitor::OnTimer(LPVOID p , BOOLEAN){
	ClipBoardMonitor* a=(ClipBoardMonitor*)p;
	if(!a->m_lock)
	{
		a->m_lock=true;
		char buffer[BUFFER];
	
		OpenClipboard(NULL);
		HANDLE h= GetClipboardData(CF_TEXT);
		::GlobalLock(h);
		char* c=(char*)h;
		strcpy_s(buffer,c);
		::GlobalUnlock(h);	
		wchar_t  ws[BUFFER];
		swprintf(ws, BUFFER, L"%hs", buffer);
		MessageBox(NULL,ws,L"TEXT",0);
		a->m_lock=false;
	}
}

void ClipBoardMonitor::StopMonitor()
{
	//::SetWindowsHookEx(WH_
}
